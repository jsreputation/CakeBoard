import toast from 'react-hot-toast';

let options = {
    position: 'top-center',
    autoClose: 3500,
    closeOnClick: true,
    icon: '👏'
}

export const successAlert = async() => {
    alert('success');
}

export const warnAlert = async() => {
    alert('warning');
}

export const errorAlert = async() => {
    alert('error');
}


    