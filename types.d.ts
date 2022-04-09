type AccountState = 0;

type ThemeAction = {
  type: string;
};

type DispatchType = (args: ThemeAction) => ThemeAction;
