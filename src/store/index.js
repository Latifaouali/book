import { createStore } from "vuex";
export default createStore({
  state: {
    collections: [
      {
        id: 1,
        name: "Fiction",
      },
      {
        id: 2,
        name: "Science Fiction and Fantasy",
      },
      {
        id: 3,
        name: "Historical Fiction",
      },
      {
        id: 4,
        name: "Biography and Autobiography",
      },
      {
        id: 5,
        name: "Self-Help",
      },
      {
        id: 6,
        name: "Science and Nature",
      },
      {
        id: 1,
        name: "Business and Finance",
      },
      {
        id: 7,
        name: "Travel",
      },
      {
        id: 8,
        name: "Cookbooks and Food",
      },
      {
        id: 9,
        name: "Poetry",
      },
      {
        id: 10,
        name: "Children's Books",
      },
      {
        id: 11,
        name: "Adventure",
      },
      {
        id: 12,
        name: "fantasy",
      },
      {
        id: 13,
        name: "Art",
      },
    ],
    books: [
      {
        id: 1,
        title: "The Very Hungry Caterpillar",
        img: "/book/products/book1.jpg",
        author: "Eric Carle",
        rating: 4.5,
        description:
          "Follow the journey of a little caterpillar as it eats its way through various foods before transforming into a beautiful butterfly.",
        price: 12.99,
        category: "Children's Books",
      },
      {
        id: 2,
        title: "Where the Wild Things Are",
        img: "/book/products/book2.jpg",
        author: "Maurice Sendak",
        rating: 4.8,
        description:
          "Join Max on his imaginative journey to the land of the Wild Things, where he becomes the king of these mythical creatures.",
        price: 16.99,
        category: "Children's Books",
      },
      {
        id: 3,
        title: "Harry Potter",
        img: "/book/products/book3.jpg",
        author: "J.K. Rowling",
        rating: 5.0,
        description:
          "The first book in the magical Harry Potter series, where young wizard Harry discovers his true identity and begins his adventures at Hogwarts School of Witchcraft and Wizardry.",
        price: 24.99,
        category: "Children's Books",
      },
      {
        id: 4,
        title: "Matilda",
        img: "/book/products/book4.jpg",
        author: "Roald Dahl",
        rating: 4.7,
        description:
          "Meet Matilda, a gifted young girl with telekinetic powers, as she navigates life with her less-than-loving family and her experiences at Crunchem Hall School.",
        price: 14.99,
        category: "Children's Books",
      },
      {
        id: 5,
        title: "The Chronicles of Narnia",
        img: "/book/products/book5.jpg",
        author: "C.S. Lewis",
        rating: 4.6,
        description:
          "Four siblings discover a magical world through a wardrobe and embark on a quest to free Narnia from the evil White Witch with the help of the noble lion, Aslan.",
        price: 19.99,
        category: "Children's Books",
      },
      {
        id: 6,
        title: "Green Eggs and Ham",
        img: "/book/products/book6.jpg",
        author: "Dr. Seuss",
        rating: 4.9,
        description:
          "Join Sam-I-Am as he tries to convince a hesitant friend to try green eggs and ham in this classic, playful rhyming tale.",
        price: 9.99,
        category: "Children's Books",
      },
      {
        id: 7,
        title: "Winnie-the-Pooh",
        img: "/book/products/book7.jpg",
        author: "A.A. Milne",
        rating: 4.4,
        description:
          "Enter the Hundred Acre Wood and join Winnie-the-Pooh and his friends in their delightful adventures filled with friendship, whimsy, and honey.",
        price: 15.99,
        category: "Children's Books",
      },
      {
        id: 8,
        title: "Charlotte's Web",
        img: "/book/products/book8.jpg",
        author: "E.B. White",
        rating: 4.6,
        description:
          "Follow the heartwarming story of a pig named Wilbur and his friendship with a spider named Charlotte, who works to save him from his inevitable fate.",
        price: 11.99,
        category: "Children's Books",
      },
      {
        id: 9,
        title: "Atomic Habits",
        img: "/book/products/book9.webp",
        author: "James Clear",
        rating: 4.7,
        description:
          "Learn how tiny changes can lead to remarkable results and transform your habits for a more productive and fulfilling life.",
        price: 22.99,
        category: "Self-Help",
      },
      {
        id: 10,
        title: "The Power of Now",
        img: "/book/products/book10.jpg",
        author: "Eckhart Tolle",
        rating: 4.5,
        description:
          "Explore the concept of living in the present moment and finding spiritual enlightenment for a happier life.",
        price: 18.99,
        category: "Self-Help",
      },
      {
        id: 11,
        title: "How to Win Friends and Influence People",
        img: "/book/products/book11.jpg",
        author: "Dale Carnegie",
        rating: 4.6,
        description:
          "Discover timeless principles for building positive relationships, influencing others, and achieving success in both personal and professional life.",
        price: 15.99,
        category: "Self-Help",
      },
      {
        id: 12,
        title: "Mindset: The New Psychology of Success",
        img: "/book/products/book12.jpg",
        author: "Carol S. Dweck",
        rating: 4.9,
        description:
          "Explore the concept of a growth mindset and how it can lead to success in various aspects of life.",
        price: 21.99,
        category: "Self-Help",
      },
      {
        id: 13,
        title: "You Are a Badass",
        img: "/book/products/book13.jpg",
        author: "Jen Sincero",
        rating: 4.4,
        description:
          "Empowering and humorous, this book offers practical advice to overcome self-doubt and create a life you love.",
        price: 14.99,
        category: "Self-Help",
      },
      {
        id: 14,
        title: "The Subtle Art of Not Giving a F*ck",
        img: "/book/products/book14.jpg",
        author: "Mark Manson",
        rating: 4.6,
        description:
          "Challenge conventional self-help wisdom and explore a counterintuitive approach to living a good life.",
        price: 17.99,
        category: "Self-Help",
      },
      {
        id: 15,
        title: "Eat, Pray, Love",
        img: "/book/products/book15.jpg",
        author: "Elizabeth Gilbert",
        rating: 4.2,
        description:
          "Join the author on her journey of self-discovery as she travels the world in search of balance, spirituality, and love.",
        price: 16.99,
        category: "Self-Help",
      },
      {
        id: 16,
        title: "To Kill a Mockingbird",
        img: "/book/products/book16.webp",
        author: "Harper Lee",
        rating: 4.9,
        description:
          "A classic novel exploring racial injustice and moral growth in the American South during the 1930s.",
        price: 14.99,
        category: "Fiction",
      },
      {
        id: 17,
        title: "1984",
        img: "/book/products/book17.jpg",
        author: "George Orwell",
        rating: 4.7,
        description:
          "Dystopian novel depicting a totalitarian future society where individualism is suppressed.",
        price: 16.99,
        category: "Fiction",
      },
      {
        id: 18,
        title: "The Great Gatsby",
        img: "/book/products/book18.webp",
        author: "F. Scott Fitzgerald",
        rating: 4.5,
        description:
          "Set in the Roaring Twenties, this novel explores the American Dream, love, and societal expectations.",
        price: 12.99,
        category: "Fiction",
      },
      {
        id: 19,
        title: "Pride and Prejudice",
        img: "/book/products/book19.jpg",
        author: "Jane Austen",
        rating: 4.8,
        description:
          "A classic romance novel that explores themes of love, class, and societal expectations in 19th-century England.",
        price: 18.99,
        category: "Fiction",
      },
      {
        id: 20,
        title: "The Catcher in the Rye",
        img: "/book/products/book20.webp",
        author: "J.D. Salinger",
        rating: 4.6,
        description:
          "A coming-of-age novel following the experiences of a teenager in New York City.",
        price: 15.99,
        category: "Fiction",
      },
      {
        id: 21,
        title: "The Lord of the Rings",
        img: "/book/products/book21.jpg",
        author: "J.R.R. Tolkien",
        rating: 5.0,
        description:
          "Epic fantasy trilogy that follows the quest to destroy the One Ring and defeat the Dark Lord Sauron.",
        price: 24.99,
        category: "Fiction",
      },
      {
        id: 22,
        title: "One Hundred Years of Solitude",
        img: "/book/products/book22.jpg",
        author: "Gabriel García Márquez",
        rating: 4.4,
        description:
          "Magical realism novel that tells the multi-generational story of the Buendía family in the fictional town of Macondo.",
        price: 21.99,
        category: "Fiction",
      },
      {
        id: 23,
        title: "The Girl with the Dragon Tattoo",
        img: "/book/products/book23.jpg",
        author: "Stieg Larsson",
        rating: 4.6,
        description:
          "Mystery thriller involving journalist Mikael Blomkvist and hacker Lisbeth Salander as they investigate a wealthy family's dark secrets.",
        price: 19.99,
        category: "Fiction",
      },
      {
        id: 24,
        title: "The 7 Habits of Highly Effective People",
        img: "/book/products/book24.webp",
        author: "Stephen R. Covey",
        rating: 4.8,
        description:
          "Discover powerful habits that can lead to personal and professional success in this influential self-help classic.",
        price: 19.99,
        category: "Self-Help",
      },
      {
        id: 25,
        title: "The Business of Design",
        img: "/book/products/book30.jpg",
        author: "Stephen R. Covey",
        rating: 4.8,
        description:
          "Discover powerful habits that can lead to personal and professional success in this influential self-help classic.",
        price: 19.99,
        category: "Art",
      },
    ],
    cart: [],
    wishlist:[],
    reviews:[
      {
        id:1,
        bookID:21,
        img:'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
        name:'Paul Starr',
        rating:5,
        comment:`Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culp
        sit rerum incidunt, a consequuntur recusandae ab saepe illo est
        quia obcaecati neque quibusdam eius accusamus error officiis atque
        voluptates magnam!`
      }
    ],
    bookById:null,
    currentPage: 1,
    orders:[]
  },
  getters: {
    getCollection: (state) => state.collections,
    getBooks: (state) => state.books,
    getCart: (state) => state.cart,
    getWishlist:(state) => state.wishlist,
    getReviews:(state)=>state.reviews,
    getBookById:(state)=>state.bookById,
    getOrders:(state)=>state.orders
    // getProducts: (state) => {
    //   const startIndex = (state.currentPage - 1) * booksPerPage;
    //   const endIndex = startIndex + booksPerPage;
    //   return state.books.slice(startIndex, endIndex);
    // },
  },
  actions: {
    async getBookByIdAc({ commit, state }, id) {
      try {       
        const book = state.books.find(book => book.id === id);        
        commit('GET_BOOK_BY_ID', book);
      } catch (error) {
        console.error('Error in getBookByIdAc action:', error);
      }
    },
    addToCart({ commit }, item) {
      commit("ADD_TO_CART", item);
    },
    removeFromCart({commit}, index) {
      commit("REMOVE_FROM_CART", index);
    },
    removeAllFromCart({commit}) {
      commit('REMOVE_ALL_CART')
    },
    updateCartItemQuantity({ commit }, { index, quantity }) {
      commit('UPDATE_CART_QUANTITY', { index, quantity });
    },

    //wishlist:
     addToWishlist({commit},item){
      commit("ADD_TO_WISHLIST",item);
     },
     removeFromWishlist({commit}, index) {
      commit("REMOVE_FROM_WISHLIST", index);
    },
    removeAllFromWishlist({commit}) {
      commit('REMOVE_ALL_WISHLIST')
    },

    //reviews
    addToRev({ commit }, item) {
      commit("ADD_TO_REV", item);
    },

    //
    changePage({ commit }, page) {
      commit('CHANGE_PAGE', page);
    },

    //
    searchBooks({ commit, state }) {
      const filteredBooks = state.books.filter((book) =>
        book.title.toLowerCase().includes(state.searchQuery.toLowerCase()) ||
        book.author.toLowerCase().includes(state.searchQuery.toLowerCase())
      );
      commit("SET_FILTERED_BOOKS", filteredBooks);
    },
    //orders
    placeOrder({commit},item){
      commit('PLACE_ORDER',item);
    }


  },
  mutations: {
GET_BOOK_BY_ID(state, book) {
    state.bookById = book;
  },
    ADD_TO_CART(state, item) {
        state.cart.push(item);
    },
    REMOVE_FROM_CART(state,index){
      state.cart.splice(index, 1);
    },
    REMOVE_ALL_CART(state){
      state.cart = [];
    },
    UPDATE_CART_QUANTITY(state, { index, quantity }) {
      if (state.cart[index]) {
        state.cart[index].Q = quantity;
      }
    },

    //wishlist
    ADD_TO_WISHLIST(state,item){
      state.wishlist.push(item)
    },
    REMOVE_FROM_WISHLIST(state,index){
      state.wishlist.splice(index, 1);
    },
    REMOVE_ALL_WISHLIST(state){
      state.wishlist = [];
    },

    //reviews
    ADD_TO_REV(state,item){
      state.reviews.push(item);
    },

    //
    CHANGE_PAGE(state, page) {
      state.currentPage = page;
    },

  //order
  PLACE_ORDER(state,order){
    state.orders.push(order);
  }
  },
});
