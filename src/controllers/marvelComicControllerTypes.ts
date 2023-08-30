export interface Comic {
    id:                 number;
    digitalId:          number;
    title:              string;
    issueNumber:        number;
    variantDescription: string;
    description:        null;
    modified:           string;
    isbn:               string;
    upc:                string;
    diamondCode:        string;
    ean:                string;
    issn:               string;
    format:             string;
    pageCount:          number;
    textObjects:        any[];
    resourceURI:        string;
    urls:               URL[];
    series:             Series;
    variants:           Series[];
    collections:        any[];
    collectedIssues:    any[];
    dates:              DateElement[];
    prices:             Price[];
    thumbnail:          Thumbnail;
    images:             any[];
    creators:           Characters;
    characters:         Characters;
    stories:            Characters;
    events:             Characters;
}

export interface Characters {
    available:     number;
    collectionURI: string;
    items:         Item[];
    returned:      number;
}

export interface Item {
    resourceURI: string;
    name:        string;
    role?:       string;
    type?:       string;
}

export interface DateElement {
    type: string;
    date: string;
}

export interface Price {
    type:  string;
    price: number;
}

export interface Series {
    resourceURI: string;
    name:    string;
}

export interface Thumbnail {
    path:      string;
    extension: string;
}

export interface URL {
    type: string;
    url:  string;
}
