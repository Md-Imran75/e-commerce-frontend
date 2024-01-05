import {  useEffect } from 'react'
import { BsImage } from 'react-icons/bs'
import { FadeLoader } from 'react-spinners'
import { useSelector, useDispatch } from 'react-redux'
import toast from 'react-hot-toast'
import { customer_profile_image_upload, messageClear,} from '../store/reducers/authReducer'

const Profile = () => {

    const dispatch = useDispatch()
    const { userInfo, loader, successMessage, errorMessage } = useSelector(state => state.auth)


    
const add_image = (e) => {
    if (e.target.files.length > 0) {
        const formData = new FormData();
        formData.append('image', e.target.files[0]);
        dispatch(customer_profile_image_upload(formData));
    }
};


    useEffect(() => {
        if (successMessage) {
            toast.success(successMessage)
            
            messageClear()
        }
        if (errorMessage) {
            toast.error(errorMessage)
            messageClear()
        }
    }, [successMessage, errorMessage])



   

    return (
        <div className="px-2 lg:ml-[260px] md:px-7 py-5">
            <div className='w-full flex flex-wrap'>
                <div className='w-full md:w-6/12'>
                    <div className='w-full p-4 rounded-md text-black-500'>
                        <div className='flex justify-center items-center py-3'>
                            {
                                userInfo?.image ?
                                    <label htmlFor='img' className='h-[400px] w-[400px] relative p-3 cursor-pointer overflow-hidden '>
                                        <img className='w-full h-full' src={userInfo.image} alt="Profile Image" />
                                        {
                                            loader &&
                                            <div className='left-0 w-full bg-secondary-500 top-0 h-full z-20 absolute justify-center items-center flex'>
                                                <FadeLoader />
                                            </div>
                                        }
                                    </label> : <label className='flex justify-center items-center flex-col h-[210px] w-[300px] cursor-pointer border border-dashed hover:border-secondary-500 border-primary-500 relative' htmlFor="img">
                                        <span><BsImage /></span>
                                        <span>Add Profile Picture</span>
                                        {
                                            loader &&
                                            <div className='left-0 w-full bg-secondary-500 top-0 h-full z-20 absolute justify-center items-center flex'>
                                                <FadeLoader />
                                            </div>
                                        }
                                    </label>
                            }

                            <input onChange={add_image} type="file" name='image' className='hidden' id='img' />

                        </div>

                        <div className='px-0 md:px-5 py-2'>
                            <div className='flex justify-between text-sm flex-col gap-2 p-4 bg-primary-200 rounded-md relative'>
                                

                                <div className='flex gap-2'>
                                    <span>Name:  </span>
                                    <span>{userInfo?.name}</span>
                                </div>
                                <div className='flex gap-2'>
                                    <span>Email: </span>
                                    <span>{userInfo?.email}</span>
                                </div>
                               
                                

                            </div>
                        </div>


                        

                    </div>
                </div>

                

            </div>
        </div>
    )
}

export default Profile
