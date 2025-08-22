import { CollectionConfig } from "payload";

export const Products: CollectionConfig = {
  slug: "products",
  access: {
    read: () => true
  },
  fields: [
    {
      name: "openFoodFactsId",
      type: "text"
    },
    {
      name: "openFoodFactsRev",
      type: "number"
    },
    {
      name: "name",
      type: "text"
    },
    {
      name: "location",      
      type: "text"
    },
    {
      name: "countriesHierarchy",      
      type: "array",
      fields: [
        {
          name: "country",
          type: "text"
        }
      ]
    },
    {
      name: "nutriscore",
      type: "text"
    },
    {
      name: "barcode",
      type: "text"
    },
    {
      name: "nutriments",
      type: "group",
      fields: [
        {
          name: "proteins",
          type: "number"
        },
        {
          name: "carbohydrates",
          type: "number"
        },
        {
          name: "kcal",
          type: "number"
        },
        {
          name: "fat",
          type: "number"
        }
      ]
    },
    {
      name: "quantity",
      type: "text"
    }
  ]
}