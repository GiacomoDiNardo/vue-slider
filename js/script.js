const slides = [
    {
        image: 'img/01.jpg',
        title: 'Svezia',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    },
    {
        image: 'img/02.jpg',
        title: 'Svizzera',
        text: 'Lorem ipsum.',
    },
    {
        image: 'img/03.jpg',
        title: 'Gran Bretagna',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    },
    {
        image: 'img/04.jpg',
        title: 'Germania',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.',
    },
    {
        image: 'img/05.jpg',
        title: 'Paradise',
        text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis.',
    }
];

const appVue = new Vue({
    el: "#app",
    
    data: {
        listaSlides: slides,
        activeImage: 0,
    },
    

    methods: {
        selectPrevImg: function () {
            if (this.activeImage > 0 ) {
                this.activeImage --
            } else {
                this.activeImage = this.listaSlides.length - 1
            }
        },

        selectnextImg: function () {
            if (this.activeImage < this.listaSlides.length - 1) {
                this.activeImage ++
            } else {
                this.activeImage = 0
            }
        },

        currentImage: function (i) {
            console.log("hai clickato l'immagine" + i);
            this.activeImage = i;
            
        },

        isActive (thumbImg, bigImg) {
            if(thumbImg === bigImg) {
                return "active"
            }
        }
    },
});
