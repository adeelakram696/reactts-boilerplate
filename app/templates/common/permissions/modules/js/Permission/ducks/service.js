// import axios from 'utils/axios';
// import { BASE_URL } from 'configs/constants';
import { PERMISSIONS } from './constants';

// const RBAC_URL = `${BASE_URL}rbac/permissions`;

const getPermissions = () =>
  new Promise((resolve) => {
    resolve(PERMISSIONS);
    // axios({
    //   url: RBAC_URL,
    //   method: 'GET',
    // }).then((response) => {
    //   resolve(response);
    // }).catch((error) => {
    //   reject(error);
    // });
  });

export default getPermissions;
