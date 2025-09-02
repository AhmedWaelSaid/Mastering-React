
import { categories } from '../../data';
import { Listbox, ListboxButton, ListboxOptions, ListboxOption, Label } from '@headlessui/react';
import { ChevronUpDownIcon } from '@heroicons/react/20/solid';
import {type ICategory } from './../../Interfaces/index';
  
interface Iprops {
  selected : ICategory ,
  setSelected : (Category : ICategory) => void
}


 export const Select = ({selected, setSelected} : Iprops) => {
  console.log(selected);

  return (
    <Listbox value={selected} onChange={setSelected}>
      <Label className="block text-sm font-medium text-gray-900">Assigned to</Label>
      <div className="relative mt-2">
        <ListboxButton className="grid w-full cursor-default grid-cols-1 rounded-md bg-white py-1.5 pr-2 pl-3 text-left text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-indigo-600 sm:text-sm">
          <span className="col-start-1 row-start-1 flex items-center gap-3 pr-6">
            <img
              alt=""
              src={selected.imageURL}
              className="size-5 shrink-0 rounded-full bg-gray-100"
            />
            <span className="block truncate">{selected.name}</span>
          </span>
          <ChevronUpDownIcon
            aria-hidden="true"
            className="col-start-1 row-start-1 size-5 self-center justify-self-end text-gray-500 sm:size-4"
          />
        </ListboxButton>

        <ListboxOptions
          className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg outline-1 outline-black/5 sm:text-sm"
        >
          {categories.map((category) => (
            <ListboxOption
              key={category.id}
              value={category}
              className="group relative cursor-default py-2 pr-9 pl-3 text-gray-900 select-none data-focus:bg-indigo-600 data-focus:text-white data-focus:outline-hidden"
            >
              <div className="flex items-center">
                <img
                  alt=""
                  src={category.imageURL}
                  className="size-5 shrink-0 rounded-full"
                />
                <span className="ml-3 block truncate font-normal group-data-selected:font-semibold">
                  {category.name}
                </span>
              </div>
            </ListboxOption>
          ))}
        </ListboxOptions>
      </div>
    </Listbox>
  );
}