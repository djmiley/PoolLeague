import './league-table-direction-sorter.tag';
import './league-table-option-sorter.tag';

<league-table-sorter>

    <league-table-option-sorter
        store={this.opts.store}
        setleaguetablesortoption={opts.setleaguetablesortoption}>
    </league-table-option-sorter>
    <league-table-direction-sorter
        store={this.opts.store}
        setleaguetablesortdirection={opts.setleaguetablesortdirection}>
    </league-table-direction-sorter>

    <script>

        let store = this.opts.store;

        this.state = store.getState();

        store.subscribe(() => {
            this.state = store.getState();
            this.update();
        });

        this.setleaguetablesortdirection = (direction) => {
            this.opts.setleaguetablesortdirection(direction);
        };

        this.setleaguetablesortoption = (option) => {
            this.opts.setleaguetablesortoption(option);
        };

    </script>

</league-table-sorter>