export default interface UseCase<E, X> {
  execute(enter: E): Promise<X>;
}
