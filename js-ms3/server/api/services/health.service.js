import l from '../../common/logger';

class HealthService {
  static api() {
    return {
      status: 'running',
    };
  }

  static byService(id) {
    return {
      id: id,
      status: 'not implemented',
    };
  }
}

export default new HealthService();
