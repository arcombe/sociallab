import React, { Component } from 'react';
import SectionHeader from '../common/SectionHeader';
import exploreImg from '../../img/explore-section1.jpg';
import SectionBody from '../common/SectionBody';

class Explore extends Component {
  render() {
    return (
      <div>
        <section id="explore-head-section">
          <SectionHeader
            header="Explore"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                  facere, recusandae tempora architecto possimus similique eius
                  reiciendis qui repellat consectetur."
            btnContent="Find Out More"
          />
        </section>
        <section id="explore-section" className="bg-light text-muted py-5">
          <SectionBody
            image={exploreImg}
            header="Explore And Connect"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                  sint provident quae necessitatibus? Fuga perspiciatis quidem
                  praesentium vel quas ipsam."
            check1="Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Animi corrupti perspiciatis explicabo accusantium itaque!
                  Sint culpa cumque debitis rerum quia."
            check2="Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Animi corrupti perspiciatis explicabo accusantium itaque!
                  Sint culpa cumque debitis rerum quia."
            positionLeft={true}
          />
        </section>
      </div>
    );
  }
}

export default Explore;
