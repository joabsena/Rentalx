import {
  ICreateSpecificationDTO,
  ISpecificationsRepository,
} from '../repositories/ISpecificationsRepository';

class CreateSpecificationService {
  constructor(private specificationRepository: ISpecificationsRepository) {}

  execute({ name, description }: ICreateSpecificationDTO): void {
    this.specificationRepository.create({ name, description });
  }
}

export { CreateSpecificationService };
