import { createStore } from "vuex";


// Create a new store instance or import from module.
const store = createStore({
    /* state, actions, mutations */
    state: {
        token: '',
        login: false,
        isLoading: false,
        showBottomBar: false,
        countAppointment: 0,
        userName: 'Arturo Lopez',
        catalogs: {
            roles: [],
            periods: [],
            genders: [],
            customerTypes: []
        },
        showModalNewEmployee: false,
        showModalNewProduct: false,
        showModalNewCustomer: false,
        countEmployees: 0,
        countCustomers: 0
    },
    mutations: {
        NEW_TOKEN(state, payload){
            state.token = payload;
        },
        CHANGE_LOGIN(state, payload){
            state.login = payload
        },
        CHANGE_LOADING(state, payload){
            state.isLoading = payload
        },
        CHANGE_BOTTOM_BAR(state, payload){
            state.showBottomBar = payload
        },
        COUNT_APPOINTMENT(state, payload){
            state.countAppointment += payload
        },
        CHANGE_USERNAME(state, payload){
            state.userName = payload
        },
        LOAD_ROLES(state, payload){
            state.catalogs.roles = payload
        },
        SHOW_MODAL_NEW_EMPLOYEE(state, payload){
            state.showModalNewEmployee = payload;
        },
        SHOW_MODAL_NEW_PRODUCT(state,payload){
            state.showModalNewProduct = payload;
        },
        SHOW_MODAL_NEW_CUSTOMER(state,payload){
            state.showModalNewCustomer = payload;
        },
        LOAD_PERIODS(state,payload){
            state.catalogs.periods = payload;
        },
        LOAD_GENDERS(state,payload){
            state.catalogs.genders = payload;
        },
        LOAD_CUSTOMER_TYPES(state,payload){
            state.catalogs.customerTypes = payload;
        },
        COUNTING_EMPLOYEES(state,payload){
            state.countEmployees += payload;
        },
        COUNTING_CUSTOMERS(state,payload){
            state.countCustomers +=payload;
        }

    }
  });


export default store;