interface Map  {
  success: any;
  error: Record<string, {string: string}>;
  message: string;
} 

export const checkResponse = (data: Map) => { 
  if (data.error) {
    Object.keys(data.error).map((key) => {
      console.log(data.error[key]);
    });
  } 

  return data.success;
}

