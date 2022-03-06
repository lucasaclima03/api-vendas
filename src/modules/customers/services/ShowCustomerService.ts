import { AppError } from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import Customer from '../typeorm/entities/Customer';
import CustomersRepository from '../typeorm/repositories/CustomersRepository';

interface IRequest {
  id: string;
}

class ShowCustomerService {
  public async execute({ id }: IRequest): Promise<Customer> {
    const customersRepository = getCustomRepository(CustomersRepository);
    const costumer = await customersRepository.findById(id);
    if (!costumer) {
      throw new AppError('Customer not found');
    }
    return costumer;
  }
}

export default ShowCustomerService;
