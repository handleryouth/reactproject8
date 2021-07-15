import React  from "react";
import Location from "./Location";

export default function Locations() {


  return (
    <div>
      <Location
        image="/images/locations/desktop/image-map-canada.png"
        title="CANADA"
        address1="Designo Central Office"
        address2="3886 Wellington Street"
        address3="Toronto, Ontario M9C 3J5"
        contact1="P : +1 253-863-8967"
        contact2="M : contact@designo.co"
      />

      <Location
        image="/images/locations/desktop/image-map-australia.png"
        title="AUSTRALIA"
        address1="Designo AU Office"
        address2="19 Balonne Street"
        address3="New South Wales 2443"
        contact1="P : (02) 6720 9092"
        contact2="M : contact@designo.au"
      />

      <Location
        image="/images/locations/desktop/image-map-australia.png"
        title="UNITED KINGDOM"
        address1="Designo UK Office"
        address2="13  Colorado Way"
        address3="Rhyd-y-fro SA8 9GA"
        contact1="P : 078 3115 1400"
        contact2="M : contact@designo.uk"
      />
    </div>
  );
}
