export function setLocalStorage<T> (name: string, data:any): T | void {
  localStorage.setItem(name, JSON.stringify(data));
}

export function getLocalStorageItem<T> (name: string):T | null {
  const data = localStorage.getItem(name);
  if(data){
    return JSON.parse(data);
  }
  return null;
}

export function deleteFromLocalStorage (name: string) {
  localStorage.removeItem(name);
}

