type Image = {
   path: string;
   alt: string;
};

export type TableRowProps = {
   image: Image;
   title: string;
   freeServer: string;
   paidServer: string;
};
