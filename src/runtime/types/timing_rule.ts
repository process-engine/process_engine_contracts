/**
 * Describes the interval in which a cycle-type timer is to repeatedly expire.
 *
 * The syntax is the same as the one used by a cronjob.
 */
export class TimingRule {
  public second?: number;
  public minute?: number;
  public hour?: number;
  public date?: number;
  public month?: number;
  public year?: number;
  public dayOfWeek?: number;
}
