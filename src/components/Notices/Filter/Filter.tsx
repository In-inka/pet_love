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
import Close from '@/components/main/icons/Close';

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
     defaultValues.keyword = data?.keyword;
     defaultValues.category = data?.category;
     defaultValues.species = data?.species;
     defaultValues.locationId = data?.locationId;
     defaultValues.popularity = data?.popularity;
     defaultValues.price = data?.price;
     SubmitHandler(data);
     console.log(data)
  };

  return (
    <div className='bg-[#FFF4DF] h-[216px] p-[40px] rounded-[30px] mb-[40px] w-[1216px] mx-auto my-0 text-[16px] '>
      <form
        className="box-border"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className='flex items-center border-b border-[rgba(38, 38, 38, 0.1)] pb-[20px] mb-[20px]'>
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
            <button type='submit' className='w-[265px] h-[48px] bg-[#F6B83D] text-white rounded-[30px] flex gap-2 justify-center items-center'>
            <p>Застосувати</p>
              <Search className='stroke-white fill-none w-[18px] h-[18px]'/>
          </button>
       </div>
        <div className='flex gap-2'>
           <Controller
      control={control}
            name={'popularity'}
            defaultValue={null}
      render={({ field: { onChange, onBlur, value, ref } }) => (
        <div className='flex gap-2'>
          <label>
            <div
              className={`w-[109px] h-[48px] bg-[#FFFFFF] text-[16px] rounded-[30px] flex justify-center gap-[8px] items-center relative`}
               style={{
        backgroundColor: value === true ? '#F6B83D' : '#FFFFFF',
        color: value === true ? '#FFFFFF' : '#000000',
      }}
    ><p>Popular</p> {value === true && <button onClick={()=>onChange(null)}  ><Close className='fill-none stroke-white w-[18px] h-[18px]' /></button>}
            <input
              type="radio"
              onBlur={onBlur}
              onChange={() => onChange(true)} 
              checked={value === true}
                id='true'
                className='hidden'
              />
              </div>
          </label>
          <label>
             <div
              className={`w-[109px] h-[48px] bg-[#FFFFFF] text-[16px] rounded-[30px] gap-[8px] flex justify-center items-center`}
               style={{
        backgroundColor: value === false ? '#F6B83D' : '#FFFFFF',
        color: value === false ? '#FFFFFF' : '#000000',
      }}
            >
              <p>Unpopular</p> {value === false && <button onClick={()=>onChange(null)}  ><Close className='fill-none stroke-white w-[18px] h-[18px]' /></button>}
            <input
              type="radio"
              onBlur={onBlur} 
              onChange={() => onChange(false)} 
              checked={value === false}
                id='false'
                className='hidden'
              />
              </div>
          </label>
        </div>
      )}
          />
                     <Controller
            control={control}
              defaultValue={null}
      name={'price'}
      render={({ field: { onChange, onBlur, value, ref } }) => (
        <div className='flex gap-2'>
          <label>
            <div
              className={`w-[109px] h-[48px] bg-[#FFFFFF] text-[16px] rounded-[30px] flex justify-center gap-[8px] items-center`}
               style={{
        backgroundColor: value === true ? '#F6B83D' : '#FFFFFF',
        color: value === true ? '#FFFFFF' : '#000000',
      }}
    ><p>Cheap</p> {value === true && <button onClick={()=>onChange(null)}  ><Close className='fill-none stroke-white w-[18px] h-[18px]' /></button>}
            <input
              type="radio"
              onBlur={onBlur}
              onChange={() => onChange(true)} 
              checked={value === true}
                id='true'
                className='hidden'
              />
              </div>
          </label>
          <label>
             <div
              className={`w-[109px] h-[48px] bg-[#FFFFFF] text-[16px] rounded-[30px] gap-[8px] flex justify-center items-center`}
               style={{
        backgroundColor: value === false ? '#F6B83D' : '#FFFFFF',
        color: value === false ? '#FFFFFF' : '#000000',
      }}
            >
              <p>Expensive</p> {value === false && <button onClick={()=>onChange(null)} ><Close className='fill-none stroke-white w-[18px] h-[18px]' /></button>}
            <input
              type="radio"
              onBlur={onBlur} 
              onChange={() => onChange(false)} 
              checked={value === false}
                id='false'
                className='hidden'
              />
              </div>
          </label>
        </div>
      )}
          />
      </div>
          </form>
    </div>
  );
};

export default Filters;
