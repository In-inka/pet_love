/* eslint-disable no-unused-vars */
'use client';

import { Controller, FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import defaultValues from './defaultValues';
import schema from './schema';
import { zodResolver } from '@hookform/resolvers/zod';
import TextInput from '@/components/ui/TextInput';
import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { constants } from '@/constants';
import { getCategory, getSex, getSpecies } from '@/api/notices';
import Select, { ActionMeta } from 'react-select';
import { useEffect } from 'react';
import { selectStyles } from '../../ui/selectStyles';
import SelectInput from '@/components/ui/SelectInput';
import SearchField from '@/components/ui/SearchField';
import SearchInput from '@/components/ui/SearchInput';

export type Option = {
  value: string;
  label: string;
};

const Filters = () => {
  const category: UseQueryResult<[], Error> = useQuery({
    queryKey: [constants.category.FETCH_CATEGORY],
    queryFn: getCategory,
  });

  const gender: UseQueryResult<[], Error> = useQuery({
    queryKey: [constants.sex.FETCH_SEX],
    queryFn: getSex,
  });

    const type: UseQueryResult<[], Error> = useQuery({
    queryKey: [constants.species.FETCH_SPECIES],
    queryFn: getSpecies,
  });

  const capitalizeWords = (str: string) => {
    return str.replace(/\b\w/g, char => char.toUpperCase());
  };

  const categories = category?.data || [];
  const genders = gender?.data || [];
  const types = type?.data || [];
  const capitalizedCategories = categories.map(category => capitalizeWords(category));
  const capitalizedGenders = genders.map(item => capitalizeWords(item));
  const capitalizedTypes = types.map(item => capitalizeWords(item));

  const optionCategory = [
    { label: 'Show All', value: 'show all' },
    ...capitalizedCategories.map(category => ({ label: category, value: category.toLowerCase() }))
  ]; 
  
  const optionGenders = [
    { label: 'Show All', value: 'show all' },
    ...capitalizedGenders.map(item => ({ label: item, value: item.toLowerCase() }))
  ]; 
   const optionTypes = [
    { label: 'Show All', value: 'show all' },
    ...capitalizedTypes.map(item => ({ label: item, value: item.toLowerCase() }))
    ]; 

  const {
    control,
    setValue,
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
    <div className='bg-[#FFF4DF] h-[216px] p-[40px] rounded-[30px] mb-[40px] w-[1216px] mx-auto my-0 " '>
      <form
        className="box-border flex  border-r-[1px] border-secondaryGray items-center"
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
            <SelectInput
              placeholder={'Category'}
              {...field}
              options={optionCategory}
            />
          )}
        />
         <Controller
          name="sex"
          control={control}
          render={({ field }) => (
            <SelectInput
              placeholder={'By Gender'}
              {...field}
              options={optionGenders}
            />
          )}
        />
          <Controller
          name="species"
          control={control}
          render={({ field }) => (
            <SelectInput
              placeholder={'By Type'}
              {...field}
              options={optionTypes}
            />
          )}
        />
         <Controller
          name="locationId"
          control={control}
          render={({ field }) => (
            <SearchInput
              placeholder={'Location'}
              {...field}
            />
          )}
        />
          </form>
    </div>
  );
};

export default Filters;
