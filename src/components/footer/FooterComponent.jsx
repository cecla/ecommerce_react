import React from "react";
import FollowerComponent from "./FollowerComponent";
import SmallNavigationComponent from "./SmallNavigationComponent";
import SubscribeComponent from "./SubscribeComponent";
import LinksComponent from "./LinksComponent";
import PaymentLogosComponent from "./PaymenLogosComponent";

const FooterComponent = ({ links }) => (
  <div className="footer">
    <SmallNavigationComponent />
    <SubscribeComponent />
    <FollowerComponent />
    {links && <LinksComponent links={links} />}
    <PaymentLogosComponent />
    <p>© 2015 Eton. All rights reserved.</p>
  </div>
);

export default FooterComponent;
