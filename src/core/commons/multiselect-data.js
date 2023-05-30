import FilterText from "../filters/filters-text";

export default{
    methods: {
        ...FilterText.methods,
        mapOptionsFromSomeCatalog(catalogList) {
            let options = [];

            options = catalogList.map((e) => {
              let element = { ...e, value: "" };
      
              element.value = e.id;
              element.description = this.capitalize(e.description);
      
              return element;
            });

            return options;
    }
}
}