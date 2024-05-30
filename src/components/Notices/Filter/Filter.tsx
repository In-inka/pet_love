/* eslint-disable no-unused-vars */
'use client';

import { Controller, FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import defaultValues from './defaultValues';
import schema from './schema';
import { zodResolver } from '@hookform/resolvers/zod';
import TextInput from '@/components/ui/TextInput';
import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { constants } from '@/constants';
import { getCategory } from '@/api/notices';
import Select, { ActionMeta } from 'react-select';
import { useEffect } from 'react';
import { selectStyles } from './selectStyles';

export type Option = {
  value: string;
  label: string;
};

const Filters = () => {
  const category: UseQueryResult<[], Error> = useQuery({
    queryKey: [constants.category.FETCH_CATEGORY],
    queryFn: getCategory,
  });

  const capitalizeWords = (str: string) => {
    return str.replace(/\b\w/g, char => char.toUpperCase());
  };

  const categories = category?.data || [];
  const capitalizedCategories = categories.map(category => capitalizeWords(category));

  const optionCategory = [
    { label: 'Show All', value: 'show all' },
    ...capitalizedCategories.map(category => ({ label: category, value: category.toLowerCase() }))
    ]; 

  const {
    control,
    watch,
    formState: { errors },
  } = useForm<FieldValues>({
    resolver: zodResolver(schema),
    mode: 'onChange',
    defaultValues: { ...defaultValues },
  });

 const watchedValues = watch();

  useEffect(() => {
    console.log(watchedValues);
  }, [watchedValues]);

  return (
    <div className='bg-[#FFF4DF] h-[216px] p-[40px] rounded-[30px] mb-[40px]'>
      <form
        className="box-border flex gap-[16px] border-r-[1px] border-secondaryGray pl-[24px] pr-[32px]"
      >
        <Controller
          name="keyword"
          control={control}
          render={({ field }) => (
            <TextInput
              {...field}
              placeholder={'Search'}
            />
          )}
        />
              <Controller
                  
          name="category"
          control={control}
          render={({ field }) => (
            <Select
              styles={selectStyles}
              placeholder={'Category'}
              {...field}
              options={optionCategory}
              value={optionCategory.find(option => option.value === field.value)}
              onChange={(newValue: unknown,
                _actionMeta: ActionMeta<unknown>) => {
                if (
                  typeof newValue === 'object' &&
                  newValue !== null &&
                  'value' in newValue
                ) {
                  field.onChange((newValue  as Option).value);
                 
     
                } else {
                  field.onChange('');
                }
              }}
                 
            />
          )}
        />
          </form>
    </div>
  );
};

export default Filters;
