import {useState , useEffect} from 'react'
import {customer_change_password , messageClear } from '../../store/reducers/authReducer'
import toast from 'react-hot-toast'
import { useSelector, useDispatch , } from 'react-redux'



const ChangePassword = () => {

    const dispatch = useDispatch()
    const [passwordForm, setPasswordForm] = useState({
        email: '',
        oldPassword: '',
        newPassword: '',
    });

    const { successMessage, errorMessage } = useSelector(state => state.auth)


    const changePassword = async (e) => {
        e.preventDefault();
        try {
            dispatch(customer_change_password(passwordForm));

        } catch (error) {
            toast.error('An error occurred while changing the password.');
        }

    };
    const handlePasswordChange = (e) => {
        setPasswordForm({
            ...passwordForm,
            [e.target.name]: e.target.value,
        });
    };

    useEffect(() => {
        if (successMessage) {
            toast.success(successMessage)
            setPasswordForm({
                email: '',
                oldPassword: '',
                newPassword: '',
            })
            messageClear()
        }
        if (errorMessage) {
            toast.error(errorMessage)
            messageClear()
        }
    }, [successMessage, errorMessage])

    return (
        <div className='p-4 bg-white text-black-500'>
            <div className='mb-5 font-bold text-xl'>Change Password</div>
            <form onSubmit={changePassword}>
                <div className="flex flex-col w-full gap-1">
                    <label htmlFor="email">email</label>
                    <input onChange={handlePasswordChange} value={passwordForm.email} className="px-4 py-2 focus:border-primary-500 focus:border outline-none text-black-500 rounded-md bg-primary-100" name="email" required placeholder="enter your email" type="text" />
                </div>

                <div className="flex flex-col w-full gap-1">
                    <label htmlFor="oldPassword">Old Password</label>
                    <input onChange={handlePasswordChange} value={passwordForm.oldPassword} className="px-4 py-2 focus:border-primary-500 focus:border outline-none text-black-500 rounded-md bg-primary-100" name="oldPassword" placeholder="enter your old password" required min={6} type="password" />
                </div>

                <div className="flex flex-col w-full gap-1">
                    <label htmlFor="newPassword">New Password</label>
                    <input onChange={handlePasswordChange} value={passwordForm.newPassword} className="px-4 py-2 focus:border-primary-500 focus:border outline-none text-black-500 rounded-md bg-primary-100" name="newPassword" placeholder="enter your new password" min={6} type="password" />
                </div>

                <button className="bg-secondary-500  hover:shadow-sm rounded-md px-7 py-2 my-2 text-white-100 mt-5 hover:shadow-black-500 ">Submit</button>

            </form>
        </div>
    )
}

export default ChangePassword