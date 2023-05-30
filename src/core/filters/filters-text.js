


export default {
  filters: {
    capitalize (value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    }

  },
  methods: {
     /**
         * Encoding UTF8 ⇢ base64
         * @param str
         * @returns {string}
         */
      b64EncodeUnicode(str) {
        // first we use encodeURIComponent to get percent-encoded UTF-8,
        // then we convert the percent encodings into raw bytes which
        // can be fed into btoa.
        return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g,
            function (match, p1) {
                return String.fromCharCode('0x' + p1);
            }));
    },

    /**
     * Decoding base64 ⇢ UTF8
     * @param str
     * @returns {string}
     */
    b64DecodeUnicode(str) {
        // Going backwards: from bytestream, to percent-encoding, to original string.
        return decodeURIComponent(atob(str).split('').map(function(c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
    },
    capitalize(value) {
      if (!value) return ''
      value = value.toString().toLowerCase();
     
      return value.charAt(0).toUpperCase() + value.slice(1)
    },
  },
    
}