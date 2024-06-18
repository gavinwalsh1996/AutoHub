"use client"

import { Combobox, Transition } from "@headlessui/react"
import { SearchManufacturerProps } from "../../../../types"

function SearchManufacturer({manufacturer, setManufacturer} : SearchManufacturerProps ) {
  return (
    <div className="search-manufacturer">
        <Combobox>
        <div className="relative w-full">
        Search Manufacturer
        </div>
        </Combobox> 

    </div>
  ) 
}

export default SearchManufacturer