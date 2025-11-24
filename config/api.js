export const API_KEY = "fca_live_vAMtgSAqXtRZvjtQePlm50YWuwZHYGKcXNd9kmZo";

export const buildUrl = (base, dest) =>
  `https://api.freecurrencyapi.com/v1/latest?apikey=${API_KEY}&base_currency=${base}&currencies=${dest}`;
