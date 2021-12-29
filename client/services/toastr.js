import toast from 'react-hot-toast';

let options = {
    position: 'top-center',
    autoClose: 3500,
    closeOnClick: true,
    icon: '👏'
}

export const successAlert = async() => {
    toast.success('Wallet Connected Successfully', options);
}

export const warnAlert = async() => {
    toast.error('Please confirm you have wallet connected', options)
}

export const errorAlert = async(error) => {
    toast.error(error.message, options)
}


    