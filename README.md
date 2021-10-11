# BurgerKing's Delivery Clone
A website clone of [bkdelivery.co.id](https://bkdelivery.co.id/). The main goal of this project is to let me understand and exercise more about [NextJS](https://nextjs.org/) and [TailwindCSS](https://tailwindcss.com/).

The project also only focused on Frontend (User Interface), so there are no actual consideration for core functionalities such Authentication, Order, etc.



> ⚠️ **Disclaimer:**
>
> All product images used in the project are belongs and owned by BurgerKing company. And there is no other purpose than for learning.
>
> If at any moment some images are broken or could not be loaded, it might because BK is removing that particular image.



## 🎯 Goals

1. Implement NextJS's [data fetching](https://nextjs.org/docs/basic-features/data-fetching) mechanism.

   - `getStaticProps()` and its ISR feature
   - `getStaticPaths()`

2. Side-by-side rebuild existing UI design with TailwindCSS.
3. Implement some optimizations and follow NextJS's best practice.
4. Uses [Firebase Realtime Database](https://firebase.google.com/products/realtime-database) to store and generate menu items dynamically.



## ⚙️ Technical Details

**Installation:**

1. Install all dependencies: `yarn`

2. Create new `.env.local` file to be used as API Endpoint

   ```ini
   FIREBASE_RTDB_ENDPOINT="https://asia-southeast1.firebasedatabase.app/menus.json"
   ```

   In this project, I'm using Firebase RTDB to store the data that will be represented as Menu. Schema will be explained in the next section.

   You can use any kind of backend as it matches with the schema used in this project.

3. Start development or build the project!



**Schema:**

I will write the schema in TypeScript to be easily undestand then I will give the exact example in JSON format.

```typescript
/**
 * Menu Item is a model for single menu,
 * 	for instance Large Coke is a Menu Item and it is in Beverages Menu (see below).
 *
 * Beverages:					--> Menu
 *	- Large Coke			--> MenuItem
 * 	- Large Fanta			--> MenuItem
 */
interface MenuItem {
  id: string;

  /** An image URL represented as Menu Item's thumbnail */
  imageUrl: string;

  /** Price in IDR (i.e. 25000 for Rp.25.000) */
  price: number;
}

/**
 * A "container" like Model that consist of MenuItem(s).
 *
 * This Model primarily used to separate between Menu categories.
 * Such a grid view in index page and list of different categories in `/menus` page.
 */
interface Menu {
  id: string;

  /** It's optional because the Frontend will use `id` to show Menu's name too. */
  displayName?: string;

  /** List of MenuItem(s) */
  items: MenuItem[];
}
```

The API Endpoint defined by `FIREBASE_RTDB_ENDPOINT` should response a JSON that consist **array** of `Menu`:

```json
[
  {
    "id": "beverages",
    "items": [
      {
        "id": "2786",
        "imageUrl": "https://order.bkdelivery.co.id/media/thumb/product_photo/2019/5/3/h535upbgvthbcfethaudkj_product_list.jpg",
        "name": "LARGE COKE",
        "price": 25000
      },
      {
        "id": "2631",
        "imageUrl": "https://order.bkdelivery.co.id/media/thumb/product_photo/2019/5/3/ju3eh7pkzsnganf3xmxylj_product_list.jpg",
        "name": "LARGE FANTA",
        "price": 25000
      }
    ],
    "thumbnailUrl": "https://order.bkdelivery.co.id/media/thumb/group_photo/2019/11/14/8gmvptzfvkyr8ltpevtluo_product_list.jpg"
  }
]
```
