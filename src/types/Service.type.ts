export type ServiceArgs = string[];

export type ServiceCommand<T extends ServiceArgs = ServiceArgs> = (args: T) => Promise<void>;

export type ServicesList = {
    [key: string]: ServiceCommand<ServiceArgs>;
}