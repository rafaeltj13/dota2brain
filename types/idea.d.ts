declare interface IIdea {
  id: number;
  updated_at: string;
  title: string;
  upvotes: number;
  hero: IHero;
  firstSection: IIdeaSection;
  secondSection: IIdeaSection;
  thirdSection: IIdeaSection;
  fourthSection: IIdeaSection;
  fifthSection: IIdeaSection;
}

declare interface IIdeaSection {
  id: number;
  title: string;
  description: string;
  badges: string;
  time_range_start: number;
  time_range_end: number;
}
