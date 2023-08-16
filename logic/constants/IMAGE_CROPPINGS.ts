interface IIMageCroppings {
  components: ICroppingPerComponent;
  widgets: ICroppingPerComponent;
}

interface ICroppingPerComponent {
  [name: string]: {
    desktopXL: string;
    desktopL: string;
    desktopS: string;
    tablet: string;
    mobile: string;
  };
}

const IMAGE_CROPPINGS: IIMageCroppings = {
  components: {
    CardBrandNews: {
      desktopXL: "News436x303",
      desktopL: "News316X220",
      desktopS: "News316X220",
      tablet: "News316X220",
      mobile: "News316X220",
    },
  },
  widgets: {
    ArticleTitleAndBody: {
      desktopXL: "default",
      desktopL: "default",
      desktopS: "default",
      tablet: "NewsHeroMobile390X640",
      mobile: "NewsHeroMobile390X640",
    },
  },
};

export default IMAGE_CROPPINGS;
