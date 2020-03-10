import React, { Component } from 'react';
import SectionHeader from '../common/SectionHeader';
import shareImg from '../../img/share-section1.jpg';
import SectionBody from '../common/SectionBody';

class Share extends Component {
  render() {
    return (
      <div>
        <section id="share-head-section" className="bg-primary">
          <SectionHeader
            header="Share"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                  facere, recusandae tempora architecto possimus similique eius
                  reiciendis qui repellat consectetur."
            btnContent="Find Out More"
            btnLight={true}
          />
        </section>
        <section id="share-section" className="bg-light text-muted py-5">
          <SectionBody
            image={shareImg}
            header="Share And Connect"
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

export default Share;
