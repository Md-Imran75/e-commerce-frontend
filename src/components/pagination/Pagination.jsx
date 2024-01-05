import React from 'react'
import { BsChevronDoubleLeft, BsChevronDoubleRight } from 'react-icons/bs';

const Pagination = ({ pageNumber, setPageNumber, totalItem, perPage, showItem }) => {

    let totalPage = Math.ceil(totalItem / perPage)
    let startPage = pageNumber

    let dif = totalPage - pageNumber;
    if(showItem>6){
        showItem = 5
    }
    if (dif <= showItem) {
        startPage = totalPage - showItem
    }
    let endPage = startPage < 0 ? showItem : showItem + startPage

    if (startPage <= 0) {
        startPage = 1
    }
    const createBtn = () => {
        const btns = []
    
        for (let i = startPage; i <= endPage; i++) {
            btns.push(
                <li
                    key={i}
                    onClick={() => setPageNumber(i)}
                    className={`
                        ${pageNumber === i ? 'bg-secondary-400 text-white-100' : 'bg-primary-300   text-black-500'} w-[33px] h-[33px] rounded-full flex justify-center items-center cursor-pointer`
                    }
                >
                    {i}
                </li>
            )
        }
        return btns
    }
    

    return (
        <ul className='flex  gap-3'>
            {
                pageNumber > 1 && <li onClick={() => setPageNumber(pageNumber - 1)} className='w-[33px] h-[33px] rounded-full flex justify-center bg-secondary-400  items-center  text-white-100 cursor-pointer'>
                    <BsChevronDoubleLeft />
                </li>
            }
            {
                createBtn()
            }
            {
                pageNumber < totalPage && <li onClick={() => setPageNumber(pageNumber + 1)} className='w-[33px] h-[33px] rounded-full flex justify-center items-center bg-secondary-400 text-white-100  cursor-pointer'>
                    <BsChevronDoubleRight />
                </li>
            }
        </ul>
    )
}

export default Pagination