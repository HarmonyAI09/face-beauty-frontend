const Storage = {
    setItem: function (key, value) {
        if (this.loadItem(key) === null || this.loadItem(key) !== value) {
            sessionStorage.setItem(key, value); 
            this.onChange(key);
        }
    },
    loadItem: function (key) {
        return sessionStorage.getItem(key);
    },
    onChange: function (key) {
        // custom event handler
    }
}

export default Storage;