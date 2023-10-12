export type optionType = {
    name: string;
    lat: number;
    lon: number;
    country: string;
}

export interface forecastType {
    name: string;
    country: string;
    lists: [
        {
            dt: number;
            main: {
                feels_like: number;
                humidity: number;
                pressure: number;
                temp: number;
                temp_max: number;
                temp_min: number;
            };
            weather: [
                {
                    main: string;
                    icon: string;
                    description: string;
                }
            ],
            wind: {
                speed: number;
                gust: number;
                deg: number;
            },
            clouds: {
                
            }
        }
    ]
}