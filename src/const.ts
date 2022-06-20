export const TableHeaders = {
  brand: "Производитель",
  release: "Год релиза",
  screenDiagonal: "Диагональ экрана (дюйм)",
  country: "Страна-производитель",
  memorySize: "Объем памяти",
  screenRefreshRate: "Частота обновления экрана",
  nfc: "NFC",
  esimSupport: "Поддержка ESIM",
  wirelessCharger: "Поддержка беспроводной зарядки",
  cost: "Стоимость",
};

export type Header = keyof typeof TableHeaders;