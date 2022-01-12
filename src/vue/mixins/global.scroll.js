export default {
    data() {
        return {
            scrollPosition: null
        }
    },
    methods: {
      updateScroll() {
        console.log('test');
        this.scrollPosition = window.scrollY;
  
      }
    },
    mounted() {
      window.addEventListener('scroll', this.updateScroll);
    }
    
  }