/* eslint-disable no-unused-vars */
'use client';

import { Controller, FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import defaultValues from './defaultValues';
import schema from './schema';
import { zodResolver } from '@hookform/resolvers/zod';
import TextInput from '@/components/ui/TextInput';
import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { constants } from '@/constants';
import { getCategory, getSpecies } from '@/api/notices';
import { useEffect, useState } from 'react';
import SelectInput from '@/components/ui/SelectInput';
import { getCities } from '@/api/cities';
import SelectLocation from '@/components/ui/SelectLocation';
import Search from '@/components/main/icons/Search';

export type Option = {
  value: string;
  label: string;
};

const Filters = ({
  SubmitHandler,
}: {
  SubmitHandler: (data: FieldValues) => void;
})=> {
  const category: UseQueryResult<[], Error> = useQuery({
    queryKey: [constants.category.FETCH_CATEGORY],
    queryFn: getCategory,
  });


    const type: UseQueryResult<[], Error> = useQuery({
    queryKey: [constants.species.FETCH_SPECIES],
    queryFn: getSpecies,
  });

  const cities: UseQueryResult<[], Error> = useQuery({
    queryKey: [constants.cities.FETCH_CITIES],
    queryFn: getCities,
  });

  const capitalizeWords = (str: string) => {
    return str.replace(/\b\w/g, char => char.toUpperCase());
  };


  const categories = category?.data || [];
  const types = type?.data || [];
  const citiesType = cities?.data || [];
  const capitalizedCategories = categories.map(category => capitalizeWords(category));
  const capitalizedTypes = types.map(item => capitalizeWords(item));


  const optionCategory = [
    { label: 'Show All', value: '' },
    ...capitalizedCategories.map(category => ({ label: category, value: category.toLowerCase() }))
  ]; 
  
   const optionTypes = [
    { label: 'Show All', value: '' },
    ...capitalizedTypes.map(item => ({ label: item, value: item.toLowerCase() }))
  ]; 
  
const [options, setOptions] = useState<Option[]>([]);
const [keyword, setKeyword] = useState('');

const filterData = (keyword: string, data: any[]) => {
  if (keyword) {
    const lowercasedKeyword = keyword.toLowerCase();
    return data.filter(item =>
      item.cityEn.toLowerCase().includes(lowercasedKeyword)
    );
  }
  return [];
};
 
useEffect(() => {
  if (keyword) {
    const filteredOptions = filterData(keyword, citiesType)?.map(item => ({
      label: `${item.cityEn}, ${item.stateEn}`,
      value: item._id.toLowerCase(),
    }));
    setOptions(filteredOptions || []);
  } else {
    setOptions([]);
  }
}, [keyword]);



  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    resolver: zodResolver(schema),
    mode: 'onChange',
    defaultValues: { ...defaultValues },
  });


   const onSubmit: SubmitHandler<FieldValues> = (
    data,
    event
  ) => {
    event?.preventDefault();
     SubmitHandler(data);
     console.log(data)
  };

  return (
    <div className='bg-[#FFF4DF] h-[216px] p-[40px] rounded-[30px] mb-[40px] w-[1216px] mx-auto my-0 " '>
      <form
        className="box-border flex  flex-wrap border-r-[1px] border-secondaryGray items-center"
        onSubmit={handleSubmit(onSubmit)}
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
           <SelectLocation
              {...field}
          placeholder="Location"
              options={options}
               onKeywordChange={setKeyword} 
        />
          )}

          
        />
<Controller
  name="popularity"
  control={control}
  render={({ field }) => (
    <><label htmlFor="popularity">
   <div
      className={`w-[103px] h-[48px] bg-[#FFFFFF] rounded-[30px] flex justify-center items-center ${
        field.value === true ? 'bg-yellow-500 text-white' : 'bg-white text-black'
      }`}
      onClick={() => field.onChange(true)}
    >
      Popularity
    </div>
    
      </label>
 <label htmlFor="unpopularity">
 <div
      className={`w-[103px] h-[48px] bg-[#FFFFFF] rounded-[30px] flex justify-center items-center ${
        field.value === false ? 'bg-yellow-500 text-white' : 'bg-white text-black'
      }`}
      onClick={() => field.onChange(false)}
    >
      Unpopular
    </div>
     </label>
    </>
  )}
/>
        <div>
          <button type='submit' className='w-[123px] h-[48px] bg-[#FFFFFF] rounded-[30px] flex gap-[2px] justify-center items-center'>
            <p>Застосувати</p>
              <Search className='stroke-black fill-none w-[18px] h-[18px]'/>
          </button>
        </div>
          </form>
    </div>
  );
};

export default Filters;
