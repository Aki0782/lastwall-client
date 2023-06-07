interface performRequestTypes {
  url: string;
  method?: HTTP;
  data?: {
    [key: unknown]: unknown;
  };
}
