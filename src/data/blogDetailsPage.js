import author from "@/images/author-1-1.jpg";
import image from "@/images/blog-d-1-1.jpg";

const blogDetailsPage = {
  blog: {
    image,
    
    comments: [
      {
        id: 1,
        image: "comment-1-1.jpg",
        name: "Laquanda Bachmeier",
        date: "20 April, 2019",
        time: "4:00 pm",
        text: "Lorem Ipsum is simply dummy text of the rinting and typesetting been the industry standard dummy text ever sincer condimentum purus. In non ex at ligula fringilla lobortis et not the aliquet.",
      },
      {
        id: 2,
        image: "comment-1-2.jpg",
        name: "Vicente Elmore",
        date: "20 April, 2019",
        time: "4:00 pm",
        text: "Lorem Ipsum is simply dummy text of the rinting and typesetting been the industry standard dummy text ever sincer condimentum purus. In non ex at ligula fringilla lobortis et not the aliquet.",
      },
    ],
    title: "Subscription Manager",
    texts: [
      "Magazine Subscription Management System. Starting from £7,500. A powerful and easy-to-use system specifically designed for magazine publishers to manage the complete subscriber lifecycle - from new orders to renewals and payments.",
      "How It Works: when a new subscription order comes in, you simply enter subscriber details, magazine name, subscription period (1 year, 2 years, 3 years, or any custom frequency), start issue and end issue, and offer details if applicable.",
      "The system automatically records the order and passes payment information to the integrated Accounting Module, giving you clear visibility of daily, monthly, or yearly earnings.",
      "Key Benefits for Publishers: simple and fast order entry with no repeated work; flexible subscription handling with accurate start and end issue tracking; easy one-click renewals using membership number; complete subscriber history for memberships, payments, and offers.",
      "Built-in accounting gives clear earnings insight per day with seamless integration between subscriptions and accounts. The platform significantly reduces manual administration, lowers errors, and improves operational accuracy.",
      "Subscription Manager turns a complex, time-consuming process into a smooth, organised workflow - helping magazine publishers save time, maintain accurate records, and focus on growing readership.",
    ],
    author: {
      name: "Christine Eve",
      image: author,
      text: "Lorem Ipsum is simply dummy text of the rinting and typesetting been the industry standard dummy text ever sincer condimentum purus. In non ex at ligula fringilla lobortis et not the aliquet.",
    },
  },
  tags: [
    "Managing_Subscribers",],
  share: [
    "fa fa-twitter",
    "fa fa-facebook-f",
    "fa fa-instagram",
    "fa fa-dribbble",
  ],
  posts: [
    {
      id: 1,
      image: "lp-1-1.jpg",
      title: ".",
    },
  ],
  categories: [
    "",
  ],
};

export default blogDetailsPage;
