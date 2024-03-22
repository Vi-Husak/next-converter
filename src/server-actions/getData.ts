export interface ICurrency {
  name: unknown;
  short_code: string;
}

export interface IApiCurrenciesResponse {
  meta: {
    code: number;
    disclaimer: string;
  };
  response: ICurrency[];
}

const apiHost = process.env.NEXT_PUBLIC_API_HOST;
const apiKey = process.env.NEXT_PUBLIC_API_KEY;

export async function fetchCurrencies(): Promise<IApiCurrenciesResponse> {
  const res = await fetch(`${apiHost}/currencies?api_key=${apiKey}&type=fiat`, {
    method: "GET",
    cache: "force-cache",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch currencies");
  }

  return await res.json();
}

export async function fetchExchangeRate(from: string, to: string) {
  const res = await fetch(
    `${apiHost}/latest?api_key=${apiKey}&base=${from}&symbols=${to}`,
    {
      method: "GET",
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch latest exchange rate");
  }

  return await res.json();
}

export async function fetchHistoricalExchangeRate(
  from: string,
  to: string,
  date: string
) {
  const res = await fetch(
    `${apiHost}/historical?api_key=${apiKey}&base=${from}&symbols=${to}&date=${date}`,
    {
      method: "GET",
      cache: "force-cache",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch historical exchange rate");
  }

  return await res.json();
}
