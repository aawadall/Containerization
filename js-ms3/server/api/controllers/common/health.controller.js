import HealthService from '../../services/health.service';

/**
 * Query API Health
 */
export class HealthController {
  all(req, res) {
    HealthService.api().then(r => res.json(r));
  }

  /**
   * Query Health Status by Service
   * */
  byService(req, res) {
    HealthService.byService(req.params.id).then(r => {
      if (r) res.json(r);
      else res.status(404).end();
    });
  }
}
export default new HealthController();
