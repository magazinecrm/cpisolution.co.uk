import logo from "@/images/Signature.png";

const footerData = {
  logo,
  author: "CPI Software Solution Ltd",
  year: new Date().getFullYear(),
  companyRegistration:
    "UK Limited Company Number 17129490 | Incorporated 31 March 2026",
  links: [
    {
      id: 1,
      name: "Subscription Manager",
      href: "/subscriber_manager",
    },
    {
      id: 2,
      name: "Adman",
      href: "/advertiser_manager",
    },
    {
      id: 3,
      name: "Insurance Software",
      href: "/lead_manager",
    },
    {
      id: 4,
      name: "About",
      href: "#services",
    },
    {
      id: 5,
      name: "Contact",
      href: "#contact",
    },
  ],
  socials: [
    {
      id: 1,
      icon: "fa fa-facebook-square",
      href: "#",
      
    },
    {
      id: 2,
      icon: "fa fa-twitter",
      href: "#",
    },
    {
      id: 3,
      icon: "fa fa-instagram",
      href: "#",
    },
    {
      id: 4,
      icon: "fa fa-pinterest-p",
      href: "#",
    },
  ],
};

export default footerData;
