import React, { Component } from 'react';
import $ from 'jquery';
import 'owl.carousel/dist/assets/owl.carousel.css'; // Import the Owl Carousel CSS
import 'owl.carousel'; // Import Owl Carousel JavaScript


class Feed extends Component {
    componentDidMount() {
      // Initialize Owl Carousel here
      $(this.refs.owlCarousel).owlCarousel({
        items: 3, // Number of items to show
        loop: true, // Infinite loop
        autoplay: true, // Autoplay the carousel
      });
    }
  
    render() {
      return (
        <div className="owl-carousel" ref="owlCarousel">
          <div className="item">Content 1</div>
          <div className="item">Content 2</div>
          <div className="item">Content 3</div>
          {/* Add more carousel items as needed */}
        </div>
      );
    }
  }
  
  export default Feed;
  