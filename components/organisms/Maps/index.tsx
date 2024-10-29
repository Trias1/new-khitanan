import React from "react";

export default function Maps() {
  return (
    <section id="maps">
      <div>
        <div className="section w-details-area center-text">
          <div className="container">
            <div className="map-responsive">
              <iframe
                width="550"
                height="550"
                id="gmap_canvas"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.2558061479963!2d106.7116562!3d-6.4892574000000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69dd3829775669%3A0x6e15f935568ba890!2sPerumahan%20Panorama%20Kemang%2C%20Bogor!5e0!3m2!1sid!2sid!4v1730188103227!5m2!1sid!2sid"
                frameBorder="0"
                scrolling="no"
                marginHeight={0}
                marginWidth={0}
                title="gmap"
              />
            </div>
            <a
              href="https://www.google.com/maps/place/Jl.+Kapten+Heru+Suryadi+No.106,+Cisadap,+Kec.+Ciamis,+Kabupaten+Ciamis,+Jawa+Barat+46215,+Indonesia/@-7.313052,108.315476,13z/data=!4m5!3m4!1s0x2e6f5958c6f84799:0x7479bb95ef5f06c9!8m2!3d-7.3130519!4d108.3154755?hl=en-US"
              className="btn btn-maps"
            >
              Buka Maps
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
