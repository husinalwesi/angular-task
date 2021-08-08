export interface TripItemInterface {
    id: number;
    key: string;
    title: string;
    description: string;
    tripCarouselData: tripCarouselDataInterface[];
    socialShare: socialShareInterface[];
}

export interface tripCarouselDataInterface{
    title: string;
    imageSrc: string;
}

export interface socialShareInterface{
    key: string;
    url: string;
}