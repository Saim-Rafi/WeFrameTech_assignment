export interface Story {
  id: string;
  title: string;
  image: string;
  category: "BUSINESS" | "Politics";
  date: string;
  status: "Published" | "Draft" | "Created";
  views: number;
}

export const stories: Story[] = [
    {
      id: '1',
      title: 'How 7 lines code turned into $36 Billion Empire',
      image: '/images/stories/code-laptop.jpeg',
      category: 'BUSINESS',
      date: '20 Sep 2022',
      status: 'Published',
      views: 428
    },
    {
      id: '2',
      title: 'Chez pierre restaurant in Monte Carlo by Vuidafieri',
      image: '/images/stories/restaurant.jpg',
      category: 'BUSINESS',
      date: '20 Sep 2022',
      status: 'Created',
      views: 428
    },
    {
      id: '3',
      title: 'Teknion wins Gold at 2022 International Design Awards',
      image: '/images/stories/design-award.png',
      category: 'Politics',
      date: '20 Sep 2022',
      status: 'Draft',
      views: 428
    },
    {
      id: '4',
      title: 'How 7 lines code turned into $36 Billion Empire',
      image: '/images/stories/mailchimp.jpg',
      category: 'BUSINESS',
      date: '20 Sep 2022',
      status: 'Published',
      views: 428
    },
    {
      id: '5',
      title: 'How 7 lines code turned into $36 Billion Empire',
      image: '/images/stories/code-screen.jpg',
      category: 'BUSINESS',
      date: '20 Sep 2022',
      status: 'Published',
      views: 428
    },
    {
      id: '6',
      title: 'Chez pierre restaurant in Monte Carlo by Vuidafieri',
      image: '/images/stories/restaurant-interior.jpeg',
      category: 'BUSINESS',
      date: '20 Sep 2022',
      status: 'Published',
      views: 428
    },
    {
      id: '7',
      title: 'Teknion wins Gold at 2022 International Design Awards',
      image: '/images/stories/design-interior.jpg',
      category: 'Politics',
      date: '20 Sep 2022',
      status: 'Published',
      views: 428
    },
    {
      id: '8',
      title: 'How 7 lines code turned into $36 Billion Empire',
      image: '/images/stories/code-screen.jpg',
      category: 'BUSINESS',
      date: '20 Sep 2022',
      status: 'Published',
      views: 428
    },
  ];