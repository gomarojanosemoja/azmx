export const getImgUrl = (name, type,) => {
    let imagen = () => { };
    if (type === 'svg') {
      imagen = require.context('@/assets/img', false, /\.svg$/);
    } else if (type === 'png') {
      imagen = require.context('@/assets/img', false, /\.png$/);
    }
  
    return imagen('./' + name);
  };