const Products = [
  {
    id: 1,
    name: "puma shoe",
    price:3000,
    size: "size: 9",
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTYeWDv-CybUws4RsuJsJCZZtUi5D_J2ilKA&usqp=CAU",
  },
  {
    id: 2,
    name: "adidas shoe",
    price:2800,
    size: "size: 8",
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJsqNkD0s0fAlVM7Bc-QMHjJ8_Sc9mG_Xqng&usqp=CAU",
  },
  {
    id: 3,
    name: "nike shoe",
    price:4170,
    size: "size: 10",
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyCprVNgaSH_zMRy04tiZSTJ0SLaMuOYXmeg&usqp=CAU",
  },
  {
    id: 4,
    name: "nivia shoe",
    price:1800,
    size: "size: 9",
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCR24cHFoAoJvd_st7c1Om1oUnPANy0PUQ_Q&usqp=CAU",
  },
  {
    id: 5,
    name: "sparx shoe",
    price:1530,
    size: "size: 7",
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSA37bOjSbAwdxQzSx9EcrbeTSZ6mNy1IeVw&usqp=CAU",
  },
  {
    id: 6,
    name: "campus shoe",
    price:1470,
    size: "size: 8",
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkFKn6nN1RJfaXn9yS2VGeC2MkcNSGsv3ETQ&usqp=CAU",
  },
  {
    id: 7,
    name: "reebok shoe",
    price:2250,
    size: "size: 9",
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx9UN-RZc5ZRalY7yDtzAzEGWwDcJkF-f8ZA&usqp=CAU",
  },
  {
    id: 8,
    name: "skechers shoe",
    price:1950,
    size: "size: 10",
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy9jGpZNfQSbSkW0NFBg3cAs9nJZV4hQFkfA&usqp=CAU",
  },
  {
    id: 11,
    name: "puma t-shirt",
    price:799,
    size: "size: m",
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJh1Mu2U52XbYaq2Bdfn8FQauCAF53nztUyQ&usqp=CAU",
  },
  {
    id: 12,
    name: "van heusen t-shirt",
    price:900,
    size: "size: l",
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlIhWbGbeGCzztihPGiHLllw8N94Qjtq4gtw&usqp=CAU",
  },
  {
    id: 13,
    name: "allen solly t-shirt",
    price:670,
    size: "size: l",
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4uNUHvoeYK48sBOWixjR_31ttrblwG_2jAA&usqp=CAU",
  },
  {
    id: 14,
    name: "levis t-shirt",
    price:800,
    size: "size: m",
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJl4Pu4_rGcxH9sx2xAD9LxZXCrCzRaDE9aA&usqp=CAU",
  },
  {
    id: 15,
    name: "peter england t-shirt",
    price:830,
    size: "size: m",
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVubO9fufBQrCIxzsCdcvdY_dItdFmBmwy4g&usqp=CAU",
  },
  {
    id: 16,
    name: "crocodile t-shirt",
    price:950,
    size: "size: xl",
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK7n34i5PfehOiz0b4FGF8SK-lbuQCBXEI8Q&usqp=CAU",
  },
  {
    id: 17,
    name: "classic polo t-shirt",
    price:650,
    size: "size: s",
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLETHjXn2yz3AFVghfftypV3ivWSto5PdoFw&usqp=CAU",
  },
  {
    id: 18,
    name: "tommy hilfiger t-shirt",
    price:950,
    size: "size: xxl",
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIMwhuTZpsuvg9ibQ-8xSmzn50cgSShCaD2g&usqp=CAU",
  },
  {
    id: 21,
    name: "classic polo shirt",
    price:1200,
    size: "size: l",
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV5yFKFT7a6LzyygFaebo6nZegDwzazdGnmA&usqp=CAU",
  },
  {
    id: 22,
    name: "peter england shirt",
    price:2100,
    size: "size: xl",
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs6E53wV2A34mFvmcEGC2RQzKWsttRcOokuA&usqp=CAU",
  },
  {
    id: 23,
    name: "crocodile shirt",
    price:1700,
    size: "size: l",
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCXCSOQN1Hg1xA6wIN1mEEenjEuccFgMovOg&usqp=CAU",
  },
  {
    id: 24,
    name: "allen solly shirt",
    price:1150,
    size: "size: s",
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl325LmXprEtAgTeHscNn7BisWXaRKcFUp2A&usqp=CAU",
  },
  {
    id: 25,
    name: "tommy hilfiger shirt",
    price:1530,
    size: "size: m",
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSABB14XnQk5pdP7iw_Es-OqNXLlAFbRygGIA&usqp=CAU",
  },
  {
    id: 26,
    name: "zara shirt",
    price:2470,
    size: "size: l",
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQYTiJRNj-8AxF_v0b3pVapK6VlnORY_jkRw&usqp=CAU",
  },
  {
    id: 27,
    name: "red tape shirt",
    price:1050,
    size: "size: s",
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7m8YeQnucecMX_G75qJOVRDP5N-epkQLn4g&usqp=CAU",
  },
  {
    id: 28,
    name: "indian terrain shirt",
    price:1450,
    size: "size: xxl",
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZlAaG5-F5jXXDutMXm5BUrNYSyqD5iude1Q&usqp=CAU",
  },
  {
    id: 31,
    name: "fossil watch",
    price:7000,
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP_EDRky65Rt_t1aUxIV3NRxzEv4TWCqbaXA&usqp=CAU",
  },
  {
    id: 32,
    name: "titan watch",
    price:2800,
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsqz0qP708d_y5R9c7eBOdqMjIntWn6nea3w&usqp=CAU",
  },
  {
    id: 33,
    name: "sonata watch ",
    price:3070,
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRienz5Ip4od0dJMswYepjC5cnDT1G28NJNqA&usqp=CAU",
  },
  {
    id: 34,
    name: "timex watch",
    price:  1800,
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnh9-lI3-NkZSntIyxkN5kuPaqAT2hS0WhkA&usqp=CAU",
  },
  {
    id: 35,
    name: "fastrack watch",
    price: 1530,
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD0-VWsC740JFGRkolLQIqoPt-titnciFgWg&usqp=CAU",
  },
  {
    id: 36,
    name: "casio watch",
    price: 5470,
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4XgE78h_iTHmoPXWKM9K_-KWAvweHo89L5A&usqp=CAU",
  },
  {
    id: 37,
    name: "g-shock watch",
    price:  10250,
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-pT6tIi8JUAGbL4d81vAE7FBUSh-xKvBs6Q&usqp=CAU",
  },
  {
    id: 38,
    name: "noise watch",
    price:  2050,
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH16nAPtYiShJyMOWf2HEVht97kQZsgtICFg&usqp=CAU",
  },
  {
    id: 41,
    name: "wildcraft bag",
    price: 1850,
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQuBgYdlocNHv1F-Xm1_8Q_qq90Ed3JOuFOw&usqp=CAU",
  },
  {
    id: 42,
    name: "american tourister bag",
    price:  2800,
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhajM07-7gSHddIKlZ8YJCg2t6VXFeRYvLcg&usqp=CAU",
  },
  {
    id: 43,
    name: "skybags bag",
    price:  1170,
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyOhD4eiXX7bhhHGWBR1o2AQqWoqlnnu22Yw&usqp=CAU",
  },
  {
    id: 44,
    name: "fgear bag",
    price: 1050,
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ41gm9Bxq98miUGfmLTrrvQZIts9v2ecJVXQ&usqp=CAU",
  },
  {
    id: 45,
    name: "adidas bag",
    price:  1530,
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjVy3g4XMJ5HxofjVM2YeTyxK85SyAycVLZA&usqp=CAU",
  },
  {
    id: 46,
    name: "puma bag",
    price:  1470,
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZdBLRtTHFKOQf2UW57jM-_uerbgYZDbS3ow&usqp=CAU",
  },
  {
    id: 47,
    name: "nike bag",
    price: 2250,
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHJlMl_9D15o_f8aqC81Dcku6Mzi26Wv7Eww&usqp=CAU",
  },
  {
    id: 48,
    name: "skybags bag",
    price: 1950,
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9oKeo8V-PU9zWgTGlZQ9ojxjXS0wgNgCnpw&usqp=CAU",
  },
];

export { Products };
