export interface BaseAlbumInfo {
  label: string;
}

export interface AlbumsFeed {
  feed: {
    author: {
      name: BaseAlbumInfo;
      url: BaseAlbumInfo;
    }
    entry: AlbumEntry[];
    updated: BaseAlbumInfo;
    rights: BaseAlbumInfo;
    title: BaseAlbumInfo;
    icon: BaseAlbumInfo;
    id: BaseAlbumInfo;
    link: AlbumLink[];
  }
}

export interface AlbumEntry {
  'im:name': BaseAlbumInfo;
  'im:image': AlbumImage[];
  'im:itemCount': BaseAlbumInfo;
  'im:price': AlbumPrice;
  'im:contentType': any;
  rights: BaseAlbumInfo;
  title: BaseAlbumInfo;
  link: AlbumLink;
  id: any;
  'im:artist': AlbumArtist;
  category: AlbumCategory;
  'im:releaseDate': AlbumReleaseDate;
}

export interface AlbumLink {
  attributes: {
    rel: string;
    href: string;
    type?: string;
  }
}

export interface AlbumImage extends BaseAlbumInfo {
  attributes: {
    height: string;
  }
}

export interface AlbumPrice extends BaseAlbumInfo {
  attributes: {
    amount: string;
    currency: string;
  }
}

export interface AlbumArtist extends BaseAlbumInfo {
  attributes: {
    href: string;
  }
}

export interface AlbumCategory {
  attributes: {
    'im:id': string;
    term: string;
    scheme: string;
    label: string;
  }
}

export interface AlbumReleaseDate extends BaseAlbumInfo {
  attributes: {
    label: string;
  }
}
